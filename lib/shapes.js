class Shapes{
    constructor(){
        this.color ='';
    }

    setColor(c){
        this.color = c;
    }

}

class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shapes{
    render(){
        return `<rect x="80"  y="60" width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = {Circle,Triangle,Square}






