let roles =["mage", "support", "assassin"," adc"," tank"];

class Character{
    name = '';
    role = '';
    armor;
    damage;

    constructor(name, role,armor = 100 ,damage = 100) {
        this.name = name;
        this.role = role;
        this.armor = armor;
        this.damage = damage;
    }

    user(){
        return(`${this.name} is ${this.role}`)
    }

    armorStatus(){
        return(`${this.name} is ${this.role} has Armor : ${this.armor}`)
    }

    damageStatus(){
        return(`${this.name} is ${this.role}, Attack damage: ${this.damage}`)
    }
}

class Mage extends Character{

    constructor(name,role = roles[0], armore,damage) {
        super(name, role, armore, damage);
    }
    damageStatus(){
        return(`${this.name} is ${this.role}, Magic damage: ${this.damage}`)
    }

    powerStatus(){
        return(`${this.name} is ${this.role} has Magic power, she can fly`)

    }
}

class Support extends Mage{
    heals;
    constructor(name,role = roles[2], armore,damage,heals = 10) {
        super(name,role,armore,damage)
        this.heals = heals;
    }

    healingStatus(){

        return(`${this.name} is ${this.role} she can healing ${this.heals} points`)
    }
}


class Adc extends Character {
    range;

    constructor(name, role = roles[3], armore, damage, range = 30) {
        super(name, role, armore, damage);
        this.range = range
    }

    attackDamage() {
        let status = this.range > 30 ? "Far" : "Near";
        return(`${this.name} is ${this.role}, her range is ${this.range} and it is ${status}`)

    }
}

let mari = new Support('mari')
let lika = new Adc('lika')
console.log(lika.attackDamage(), mari.healingStatus())