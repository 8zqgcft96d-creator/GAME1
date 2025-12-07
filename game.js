// 原本的程式碼：
player = this.physics.add.sprite(400, 500, 'player');

// 修改為：設定縮放為 1.5 倍
player = this.physics.add.sprite(400, 500, 'player').setScale(1.5); // <-- 已修改
player.setCollideWorldBounds(true);
player.setVisible(false);
player.setActive(false);
// 原本的程式碼：
let bullet = bullets.create(player.x, player.y - 30, 'bullet');

// 修改為：設定縮放為 1.5 倍
let bullet = bullets.create(player.x, player.y - 30, 'bullet').setScale(1.5); // <-- 已修改
if (bullet) {
    bullet.setVelocityY(-400);
}
// 原本的程式碼：
const enemy = enemies.create(x, -50, 'enemy');

// 修改為：設定縮放為 1.5 倍
const enemy = enemies.create(x, -50, 'enemy').setScale(1.5); // <-- 已修改
enemy.setVelocityY(150);
