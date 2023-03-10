// ------------------------------------------------------------------------------
// π μ΄κ±°ν νμ (Enums Type)
// β­οΈ URL : https://bit.ly/3TH25Qs
// ------------------------------------------------------------------------------
// - μ΄κ±°ν νμμ μ΄λ¦μ΄ λΆμ¬λ μμ μ§ν©μ μ μν  μ μμ΅λλ€.
// - μ΄κ±°νμ μ μλ μμλ μ«μ λλ λ¬Έμ κ°μ μ§μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// HTTP_Responses μ«μ μ΄κ±°ν νμμΌλ‘ μμ±ν©λλ€.

{
  // HTTP_Responses
  // SUCCESS β 1
  // NOT_FOUND β 2
}

// KEYCODE μ«μ μ΄κ±°ν νμμΌλ‘ μμ±ν©λλ€.

{
  // Keycode
  // LEFT β 37
  // RIGHT β 39
  // UP β 38
  // DOWN β 40
}

// Task λ¬Έμ μ΄κ±°ν νμμΌλ‘ μμ±ν©λλ€.

{
  // Task
  // ADD β 'task/add'
  // READ β 'task/read'
  // EDIT β 'task/edit'
  // DELETE β 'task/delete'
}

// OrderStatus μ΄κ±°ν νμμ κ°μ μ«μ λλ λ¬Έμλ‘ μ μν΄λ΄λλ€.

{
  enum OrderStatus {
    PENDING, //  β 1 or 'order/pending'
    SHIPPED, //  β '2 or 'order/shipped'
    DELIVERED, //  β 3 or 'order/delivered'
    RETURNED, //  β 4 or 'order/returned'
  }

  const isDelivered = (order: OrderStatus) => {
    return order === OrderStatus.DELIVERED;
  };

  console.log(isDelivered(OrderStatus.PENDING));
  console.log(isDelivered(OrderStatus.DELIVERED));
}

// enum μμ constλ₯Ό μΆκ°νλ©΄ μ»΄νμΌ κ³Όμ μμ μμμ κ°μ΄ κ·Έλλ‘ μ€μ λ©λλ€.
// μ°Έκ³ : https://bit.ly/3NGVjJ7

{
  const enum OrderStatus {
    PENDING = 'order/pending',
    SHIPPED = 'order/shipped',
    DELIVERED = 'order/delivered',
    RETURNED = 'order/returned',
  }

  type Order = { orderId: number; status: OrderStatus };

  const orders: Order[] = [
    {
      orderId: 384923124,
      status: OrderStatus.PENDING,
    },
    {
      orderId: 483912423,
      status: OrderStatus.SHIPPED,
    },
  ];

  console.log(orders[1].status);
}
