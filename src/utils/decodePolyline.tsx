export const decodePolyline = (
  encoded: string,
  mul: number
): [number, number][] => {
  const inv = 1.0 / mul
  const decoded: [number, number][] = []
  let previous = [0, 0]
  let i = 0

  while (i < encoded.length) {
    const ll = [0, 0]
    for (let j = 0; j < 2; j++) {
      let shift = 0
      let byte = 0x20
      while (byte >= 0x20) {
        byte = encoded.charCodeAt(i++) - 63
        ll[j] |= (byte & 0x1f) << shift
        shift += 5
      }
      ll[j] = previous[j] + (ll[j] & 1 ? ~(ll[j] >> 1) : ll[j] >> 1)
      previous[j] = ll[j]
    }
    decoded.push([ll[0] * inv, ll[1] * inv])
  }

  return decoded
}

export const encodeCoords = (coords: number[][]): string => {
  const encodeCoord = (coord: number) => {
    coord = Math.round(coord * 1e5)
    coord <<= 1
    if (coord < 0) {
      coord = ~coord
    }
    let encoded = ''
    while (coord >= 0x20) {
      encoded += String.fromCharCode((0x20 | (coord & 0x1f)) + 63)
      coord >>= 5
    }
    encoded += String.fromCharCode(coord + 63)
    return encoded
  }
  let result = ''
  let prevLat = 0
  let prevLng = 0

  for (let i = 0; i < coords.length; i++) {
    let lat = coords[i][0]
    let lng = coords[i][1]

    let latDiff = lat - prevLat
    let lngDiff = lng - prevLng

    result += encodeCoord(latDiff)
    result += encodeCoord(lngDiff)

    prevLat = lat
    prevLng = lng
  }

  return result
}
