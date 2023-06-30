flowerbed = [1,0,0,0,1]
n = 2

var canPlaceFlowers = function (flowerbed, n) {
    
    for (let i = 0; i < flowerbed.length - 1; i++) {
        if (flowerbed[i - 1] + flowerbed[i] + flowerbed[i + 1] == 0) {
            n--;
            i++;
        }
    }
    return n <= 0;
}

console.log(canPlaceFlowers(flowerbed, n));