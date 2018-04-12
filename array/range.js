/**
 * 缓存 rangeInt 和 rangeUntilInt 生成 的 数据
 * @type {{}}
 */
const RangeCache = {}

/**
 * 返回一个 从 start 到 end 步进 为 step 的 数组
 * @param start
 * @param end
 * @param step
 */
function rangeInt (start = 0, end = 0, step = 1) {
  const cacheKey = `${start}${end}${step}`
  if (RangeCache[cacheKey]) {
    return RangeCache[cacheKey]
  }
  const ret = []
  let index = start
  if (step === 0) {
    throw Error('in range,step can\'t be zero')
  }
  let realStep = step
  if ((end - start) / step < 0) {
    realStep = -step
  }
  for (; index <= end; index += realStep) {
    ret.push(index)
  }
  if (ret.length < 255) {
    RangeCache[`${start}${end}${step}`] = ret
  }
  return ret
}

/**
 * 返回一个 从 start 到 end 步进 为 step 的 数组
 * @param start
 * @param end
 * @param step
 */
function rangeUntilInt (start = 0, end = 0, step = 1) {
  return rangeInt(start, end - 1, step)
}

module.exports = {
  rangeInt,
  rangeUntilInt
}
