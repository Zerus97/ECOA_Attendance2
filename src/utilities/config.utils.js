const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`);

exports.getProperty = getProperty;
exports.getEnv =  () => { return env };

function getProperty(name, defaultValue) {
  
  if( process.env[name] != null ) { 
      return process.env[name];
  }
  
  if( config[env][name] != null ) {
    return config[env][name];
  }

  if( config['default'][name] != null ) {
    return config['default'][name];
  }

  if( defaultValue != null ) {
    return defaultValue;
  }
  return null;
}
