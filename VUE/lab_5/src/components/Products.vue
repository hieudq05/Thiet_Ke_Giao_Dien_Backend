<template>
    <div class="setup-frame pb-5">
        <div class="row g-3 mt-5 w-fit container pb-5">
            <div class="py-3 fs-1 fw-bold">FLAGSHIP Store</div>
            <Product
                v-for="item in products"
                :key="item"
                :product-param="item"
            />
        </div>
    </div>
</template>
<script setup>
import Product from "./Product.vue";
const products = [
    {
        id: 1,
        title: "Điều kỳ diệu của tiệm tạp hoá NAMIYA (Tái bản năm 2021) - Tặng kèm bookmark",
        price: 39999000,
        newPrice: 32000000,
        delivery: 4,
        rating: 4.5,
        tag: [1, 2],
        images: [
            "https://www.apple.com/vn/imac/images/overview/highlights/highlights_mx__d0mgmbch6iye_xsmall_2x.jpg",
            "https://www.apple.com/vn/imac/images/overview/highlights/highlights_iphone_mirroring__csp4p3buh7au_xsmall_2x.jpg",
            "https://www.apple.com/v/imac/r/images/overview/highlights/highlights_design__ffxdmsa45q62_xsmall_2x.jpg",
        ],
    },
    {
        id: 2,
        title: "Điều kỳ diệu của tiệm tạp hoá NAMIYA (Tái bản năm 2021) - Tặng kèm bookmark",
        price: 31999000,
        newPrice: 31800000,
        delivery: 3,
        rating: 4,
        tag: [3],
        images: [
            "https://www.apple.com/vn/iphone-16-pro/images/overview/media-card/highlights_camera_control_endframe__dnpy5lekpmwm_xsmall_2x.jpg",
            "https://www.apple.com/vn/iphone-16-pro/images/overview/media-card/thin__eqeewfn1mgsy_xsmall_2x.jpg",
            "https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_chip_endframe__d1d71a0qjseq_xsmall_2x.jpg",
        ],
    },
    {
        id: 3,
        title: "Điều kỳ diệu của tiệm tạp hoá NAMIYA (Tái bản năm 2021) - Tặng kèm bookmark",
        price: 99000,
        newPrice: 61000,
        delivery: 5,
        rating: 3.5,
        tag: [1, 3],
        images: [
            "https://i.pinimg.com/736x/8f/4d/65/8f4d65f6f9d86a41f297a0c9cc2a355f.jpg",
            "https://i.pinimg.com/736x/90/29/9d/90299d95a00ca2ca22d35fe3fdc70dce.jpg",
            "https://i.pinimg.com/736x/56/12/2e/56122e4852e8da8d9d3f58631487fb35.jpg",
        ],
    },
    {
        id: 4,
        title: "Điều kỳ diệu của tiệm tạp hoá NAMIYA (Tái bản năm 2021) - Tặng kèm bookmark",
        price: 99000,
        newPrice: 61000,
        delivery: 3,
        rating: 2,
        tag: [1, 2, 3],
        images: [
            "https://i.pinimg.com/736x/95/92/f3/9592f3a9b61b58788bada195044de702.jpg",
            "https://i.pinimg.com/736x/f0/f4/27/f0f427ee5b052206b675b32e62b3aa16.jpg",
            "https://i.pinimg.com/736x/63/0f/52/630f524888628c26ed464d46a76a31b8.jpg",
        ],
    },
    {
        id: 5,
        title: "Macbook Pro M4 2024 - Một tuyệt tác của trí tuệ",
        price: 44999000,
        newPrice: 44000000,
        delivery: 2,
        rating: 5,
        tag: [1, 2, 3],
        images: [
            "https://www.apple.com/v/macbook-pro/al/images/overview/welcome/welcome_hero_endframe__c61x1mv7kgqe_small_2x.jpg",
            "https://www.apple.com/v/macbook-pro/am/images/overview/themes/battery/battery_hero__d5zgrstiu9si_small_2x.jpg",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        ],
    },
    {
        id: 6,
        title: "Macbook Pro M4 2024 - Một tuyệt tác của trí tuệ",
        price: 44999000,
        newPrice: 44000000,
        delivery: 9,
        rating: 5,
        tag: [],
        images: [
            "https://www.apple.com/v/macbook-pro/al/images/overview/welcome/welcome_hero_endframe__c61x1mv7kgqe_small_2x.jpg",
            "https://www.apple.com/v/macbook-pro/am/images/overview/themes/battery/battery_hero__d5zgrstiu9si_small_2x.jpg",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        ],
    },
];
</script>
<style>
.setup-frame {
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
}
.w-fit {
    width: fit-content !important;
}
</style>
