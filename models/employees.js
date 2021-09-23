const db= require('../util/database');

module.exports= class Employee{

    static fetchAll()
    {
       return db.execute('select * from customer');
    }

};