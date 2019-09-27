const phantom = require('phantom')

module.exports = async (link) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open('https://fantasyracingcheatsheet.com/nascar/races/lineup/2019/daytona-international-speedway/daytona-500/2571')
  const content = await page.property('content')

  await instance.exit();

  return content
}
