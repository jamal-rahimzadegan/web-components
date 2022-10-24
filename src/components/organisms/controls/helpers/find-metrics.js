export function findMetricRange(carData = [], metrics = {}) {
    let target = 0
    let isMatchValue = false
    let isMatchSpeed = false

    if (!carData.length || !metrics?.ac) return target

    carData.find((item) => {
        isMatchValue =
            item.temp === metrics.temp &&
            item.wheelsize === metrics.wheelSize &&
            item.ac === metrics.ac

        if (!isMatchValue) return

        item.hwy.find((range) => {
            isMatchSpeed = range.kmh === metrics.speed
            if (isMatchSpeed) target = +range.kilometers
        })
    })

    return target
}
