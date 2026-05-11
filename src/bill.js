// クラスの定義
class Item {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

const items = [
        new Item("りんご", 100, 10),
        new Item("バナナ", 80, 20),
        new Item("みかん", 50, 15),
        new Item("お肉", 500, 5),
        new Item("牛乳", 300, 25),
        new Item("魚", 400, 30)
    ];

const getItem = (items, itemName) => {
    // itemsにはitemNameが重複するItemが存在しない前提
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (item.name == itemName) {
            return item
        }
    }
    return null
}

const calcOrderPrice = (items, itemName, orderNum) => {
    if (orderNum <= 0) {
        // 注文数エラー
        return -1
    }
    const item = getItem(items, itemName)
    if (item == null) {
        // itemが存在しない場合エラーを返す
        return -1
    }
    if (item.stock < orderNum) {
        // 在庫数が注文数より少ない場合はエラー
        return -1
    }
    return item.price * orderNum
}

const order = () => {
    const itemName = document.getElementById("itemName").value;
    const orderNum = document.getElementById("orderNum").value;
    if (itemName == "" || orderNum == 0) {
        return "error"
    }
    const item = getItem(items, itemName)
    if (item == null) {
        return "error"
    }
    const price = calcOrderPrice(items, itemName, orderNum)
    if (price < 0) {
        return "error"
    }
    console.log(`合計金額：${price}円`)
    return price
}

// メイン処理
const main = () => {
    // ArrayListの代わりに標準の配列を使用します
    const items = [
        new Item("りんご", 100, 10),
        new Item("バナナ", 80, 20),
        new Item("みかん", 50, 15),
        new Item("お肉", 500, 5),
        new Item("牛乳", 300, 25),
        new Item("魚", 400, 30)
    ];

    console.log("お会計システム作成");

    // 確認用：中身を表示
    console.table(items);
};

main();