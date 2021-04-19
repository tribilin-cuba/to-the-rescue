

// TODO: Add logging
class Repository{

    constructor(model){
        this.model = model
    }

    create(entry){
        return this.model.create(entry)
    }

    find(filters){
        return this.run([{method: 'find', args: [filters]}])
    }

    select(filters, fields){
        return this.run([{
            method: 'find',
            args: [
                filters,
                fields
            ]
        }])
    }

    remove(filters){
        return this.run([
            {
                method: 'find',
                args: [filters]
            },
            {
                method: 'deleteMany',
                args: []
            }
        ])
    }

    update(filters, newFields){
        return this.run([
            {
                method: 'find',
                args: [filters]
            },
            {
                method: 'updateMany',
                args: [newFields]
            }
        ])
    }

    run(queries, callback){

        var result = this.model
        for (const q of queries) {
            const method = q.method 
            const args = q.args

            result = result[method](...args)
        }

        return result.exec(callback)
    }
}

export default Repository