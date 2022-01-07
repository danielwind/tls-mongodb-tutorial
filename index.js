const mongoose = require('mongoose');

const db_server_ip = 'X.X.X.X'; //REPLACE_WITH_YOUR_SERVER_IP
const db_server_port = '27017'; //REPLACE_WITH_YOUR_SERVER_PORT
const db_name = 'myDB'; //REPLACE_WITH_YOUR_DATABASE_NAME
const db_server_url = `mongodb://${db_server_ip}:${db_server_port}/${db_name}`;

const mongo_client_options = {
    user: 'myuser',
    pass: 'mypassword',
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsCertificateKeyFile: `${__dirname}/keys/mongodb_client.pem`,
    tlsCertificateKeyFilePassword: 'test123'
  };

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db_server_url, mongo_client_options);
  console.log(`successfully connected!`);

  //get collections in this database!
  mongoose.connection.db.listCollections().toArray(function (err, names) {
    console.log(names);
  });

  mongoose.disconnect();
}