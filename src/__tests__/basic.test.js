const {myFunction} = require('../index.js')

describe('basic test', () => {
  beforeAll(() => {
    // this keypair is a test one, not a secret really
    let secrets = {
      TWITTER_CONSUMER_KEY: 'FAKE',
      TWITTER_CONSUMER_SECRET: 'FAKE',
      KEYPAIR_PRIVATE_KEY: '4baba8f4a',
      KEYPAIR_PUBLIC_KEY: '04fff936f805ee2',
      GITHUB_PERSONAL_ACCESS_TOKEN: 'FAKE'
    }
    process.env.SECRETS = secrets
  })

  test('This should pass', done => {
    myFunction({}, {}, (err, res) => {
      expect(err).toBeNull()
      expect(res).toBe(true)
      done()
    })
  })

  test('This should fail', done => {
    myFunction({}, {}, (err, res) => {
      expect(err).toBeNull()
      expect(res).not.toBe(true)
      done()
    })()
  })
})
