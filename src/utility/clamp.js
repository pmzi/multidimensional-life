function clamp(ratio, min, max) {
  return min + ratio * (max - min);
}

export default clamp;