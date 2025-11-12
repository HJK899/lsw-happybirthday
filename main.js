// 1. 监听文件上传
document.getElementById('photo-input').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  // 2. 读取文件并转成Base64（用于本地存储和预览）
  const reader = new FileReader();
  reader.onload = function(event) {
    const photoData = {
      name: file.name,
      data: event.target.result,
      time: new Date().toLocaleString()
    };

    // 3. 保存到本地存储（localStorage）
    let savedPhotos = JSON.parse(localStorage.getItem('birthdayPhotos') || '[]');
    savedPhotos.push(photoData);
    localStorage.setItem('birthdayPhotos', JSON.stringify(savedPhotos));

    // 4. 立即渲染刚上传的照片
    renderPhotos([photoData]);
  };
  reader.readAsDataURL(file);
});

// 5. 页面加载时渲染已保存的照片
window.onload = function() {
  const savedPhotos = JSON.parse(localStorage.getItem('birthdayPhotos') || '[]');
  renderPhotos(savedPhotos);
};

// 6. 渲染照片的函数
function renderPhotos(photos) {
  const photoContainer = document.getElementById('photo-container');
  photos.forEach(photo => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `
      < img src="${photo.data}" alt="${photo.name}">
      <p>${photo.name}（${photo.time}）</p >
    `;
    photoContainer.appendChild(photoItem);
  });
}
