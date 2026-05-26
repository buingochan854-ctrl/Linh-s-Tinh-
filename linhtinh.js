 // Code chống bị "vắt khô" 😭

function survive() {
  let energy = 100;

  while (energy > 0) {
    console.log("Đang chạy trốn... 🏃");
    energy--;

    if (energy === 50) {
      console.log("Nửa cái mạng rồi 😵");
    }
  }

  console.log("Đã bị vắt khô 💀");
}

survive();
