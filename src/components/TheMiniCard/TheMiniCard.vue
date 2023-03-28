<template>
    <div class="card">
      <div class="header">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <div class="price">
        <span class="original">{{ originalPrice }} руб.</span>
        <span class="discounted">{{ discountedPrice }} руб.</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      originalPrice: {
        type: Number,
        required: true
      },
      discountedPrice: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style lang="less">
  .card {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin:  10px;

    .header {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .description {
      font-size: 14px;
      color: #333;
      margin-bottom: 10px;
    }
    .price {
      font-size: 16px;
      .original {
        text-decoration: line-through;
        color: #999;
        margin-right: 10px;
      }
      .discounted {
        color: red;
      }
    }
  }
  </style>
  