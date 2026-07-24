class Task{
    constructor(title = "",status = "", deadline = ""){
        this.title=title;
        this.status=status;
        this.deadline=deadline;
    }

    updateStatus(s){
        this.status=s;
    }
    display(){
        return `Task name ${this.title} has status ${this.status} and deadline ${this.deadline}`
    }
}

const task1 = new Task("Coading","Incomplete","25-07-2026")

console.log(task1.display())