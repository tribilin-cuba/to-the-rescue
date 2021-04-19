

class Manager {

    constructor(repository){
        this.repository = repository
    }


    insert(entry){
        return this.repository.create(entry)
    }

    find(filters){
        return this.repository.find(filters)
    }

    update(filters, newFields){
        return this.repository.update(filters, newFields)
    }

    delete(filters){
        return this.repository.remove(filters)
    }
}

export default Manager