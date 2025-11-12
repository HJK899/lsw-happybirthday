// 本地预览功能，上传到后端后可调整
const photoInput = document.getElementById('photo-input');
const previewDiv = document.getElementById('preview');
const galleryDiv = document.getElementById('gallery');
const form = document.getElementById('photo-upload-form');

// 展示预览
photoInput.addEventListener('change', (event) => {
  previewDiv.innerHTML = '';
  Array.from(event.target.files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      previewDiv.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// 假设本地上传，实际可接API接口
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const files = photoInput.files;
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      galleryDiv.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  previewDiv.innerHTML = '';
  form.reset();
});
