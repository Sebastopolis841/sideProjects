function round(num, level) {
    return (num - (num % level) + (Math.round(Number(String((num % level/10) - (num % level/100)))[-1]) * level));
}