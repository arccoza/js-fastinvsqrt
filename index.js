const m = 0x5F375A86,
  buffer = new ArrayBuffer(4),
	view = new DataView(buffer)

function fastInvSqrt (n) {
	var f, n2 = n * 0.5, th = 1.5
		// buffer = new ArrayBuffer(4),
		// view = new DataView(buffer)
	view.setFloat32(0, n)
	view.setUint32(0, m - (view.getUint32(0) >> 1))
	f = view.getFloat32(0)
	f *= (th - (n2 * f * f))
	f *= (th - (n2 * f * f))
  return f
}

console.log(fastInvSqrt(1.6))
console.log(1/Math.sqrt(1.6))
