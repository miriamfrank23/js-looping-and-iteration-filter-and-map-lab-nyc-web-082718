const driversWithRevenueOver = (driver, revenue) => {
  return driver.filter((eachDriver) => {
    return eachDriver.revenue > revenue
  })
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map((eachDriver) => {
    return eachDriver.name
  })
}

const exactMatch = (driver, driverObject) => {
  return driver.filter((eachDriver) => {
    return Object.values(eachDriver).includes(Object.values(driverObject)[0])
  })
}

const exactMatchToList = (driver, revenueObject) => {
  return exactMatch(driver, revenueObject).map((eachDriver) => {
    return eachDriver.name
  })
}
