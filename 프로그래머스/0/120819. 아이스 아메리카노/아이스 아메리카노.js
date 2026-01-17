function solution(money) {
    let total_money = money;
    let americano = 0;
    while(total_money >= 5500){
        total_money -= 5500;
        americano += 1;
    }
    return [americano, total_money];
}