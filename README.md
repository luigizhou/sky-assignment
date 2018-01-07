This project was created for Sky as part of their recruiting process.

To build the project you'll need Vagrant 2.0.1, Virtualbox 5.2.4, Git, Ansible.

```shell
git clone https://github.com/luigizhou/sky-assignment.git
cd sky-assignment
vagrant up
```

The API code was built using nodejs.
The chosen database is Apache Cassandra.

To insert a timestamp into the db: 
```
curl -X POST http://192.168.33.2:3000/app
```
You can directly query the cassandra db to find the inserted timestamp:
```
vagrant ssh db
cqlsh 192.168.33.3
SELECT * FROM ks1.event;
```