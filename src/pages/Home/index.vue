<template>
    <div class="home-page">
        <div class="app-container">
            <div class="home-content">
                <a-carousel class="home-carousel" arrows autoplay center-mode pause-on-hover :speed="1500" :autoplay-speed="3000">
                    <template #prevArrow>
                        <div class="custom-slick-arrow" style="left: 10px;z-index: 1;">
                            <left-circle-outlined />
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="custom-slick-arrow" style="right: 10px;">
                            <right-circle-outlined />
                        </div>
                    </template>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </a-carousel>
                <a-tabs class="home-tab" v-model="tabActive">
                    <a-tab-pane v-if="isLogin" key="1" tab="关注"></a-tab-pane>
                    <a-tab-pane key="2" tab="推荐"></a-tab-pane>
                    <a-tab-pane key="3" tab="热榜"></a-tab-pane>
                    <a-tab-pane key="4" tab="最新"></a-tab-pane>
                </a-tabs>
                <a-list class="home-list" item-layout="vertical" :data-source="listData">
                    <template #loadMore>
                        <div class="home-list-loading">
                            <a-button type="link" :loading="listLoading" @click="onLoadMore">加载更多</a-button>
                        </div>
                    </template>
                    <template #renderItem="{ item }">
                        <a-list-item key="item.title">
                            <template #actions>
                                <span>
                                    <star-outlined />
                                    123
                                </span>
                                <span>
                                    <like-outlined />
                                    222
                                </span>
                                <span>
                                    <message-outlined />
                                    11
                                </span>
                            </template>
                            <template #extra>
                                <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                            </template>
                            <a-list-item-meta :description="item.description">
                                <template #title>
                                    <a :href="item.href">{{ item.title }}</a>
                                </template>
                                <template #avatar><a-avatar :src="item.avatar" /></template>
                            </a-list-item-meta>
                            {{ item.content }}
                        </a-list-item>
                    </template>
                </a-list>
                <div class="home-empty" v-if="false">
                    <a-empty />
                </div>
            </div>
            <div class="home-side">
                <a-affix :offset-top="120">
                    <div class="side-content">
                        <a-card class="side-user" :bordered="false">
                            <template #cover>
                                <img alt="example" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F011320114330%2F200113114330-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660965870&t=25b5965b02bdbdfaf581c7a1ed8ea3fb" />
                            </template>
                            <template #actions>
                                <setting-outlined key="setting" />
                                <edit-outlined key="edit" />
                                <ellipsis-outlined key="ellipsis" />
                            </template>
                            <a-card-meta title="Europe Street beat">
                                <template #description>www.instagram.com</template>
                            </a-card-meta>
                        </a-card>
                        <a-card class="side-author" title="推荐作者" :bordered="false">
                            <template #extra><a href="#">更多</a></template>
                                <a-avatar v-for="item in 5" :key="item" src="https://joeschmoe.io/api/v1/random" />
                        </a-card>
                        <a-card class="side-article" title="热门文章" :bordered="false">
                            <template #extra><a href="#">更多</a></template>
                            <a-card-meta v-for="item in 5" :key="item" title="" description="This is the description">
                                <template #description>www.instagram.com</template>
                            </a-card-meta>
                        </a-card>
                    </div>
                </a-affix>
            </div>
        </div>
        <a-back-top />
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
    LeftCircleOutlined,
    RightCircleOutlined,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    StarOutlined,
    LikeOutlined,
    MessageOutlined
} from '@ant-design/icons-vue'
import { useAuthStore } from '@/store/modules/auth'
const authSore = useAuthStore()

interface ListDataItem {
    href: string,
    title: string,
    avatar: string,
    description: string
}

const tabActive = ref<number>(2)

const loadMore = ref<boolean>(false)
const listLoading = ref<boolean>(false)
const onLoadMore = () => {
    listLoading.value = true
    setTimeout(() => {
        listLoading.value = false
    }, 3000);
}

const listData: ListDataItem[] = [
    { href: 'https://www.antdv.com/', title: 'ant design vue part 1', avatar: 'https://joeschmoe.io/api/v1/random', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.', content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' },
    { href: 'https://www.antdv.com/', title: 'ant design vue part 2', avatar: 'https://joeschmoe.io/api/v1/random', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.', content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' },
    { href: 'https://www.antdv.com/', title: 'ant design vue part 3', avatar: 'https://joeschmoe.io/api/v1/random', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.', content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' },
    { href: 'https://www.antdv.com/', title: 'ant design vue part 4', avatar: 'https://joeschmoe.io/api/v1/random', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.', content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' },
    { href: 'https://www.antdv.com/', title: '从0搭建Vue3组件库之Icon组件', avatar: 'https://joeschmoe.io/api/v1/random', description: '来自星球', content: 'Icon组件是一个组件库中不可或缺的组件之一，本篇文章将带大家实现一个Icon组件。如果你想了解完整的组件库搭建，你可以先看使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库。' }
]

const pagination = {
    pageSize: 10
}

const isLogin: boolean = computed(() => {
    return authSore.$state.userInfo.id != ''
})

</script>
<style lang="scss" scoped>
.home-page {
    .app-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 20px;

        .home-content {
            flex: 1;
            padding: 20px 20px 50px 20px;
            min-height: calc(100vh - 80px - 380px - 20px);
            background-color: #fff;

            .home-carousel {
                width: 880px;
                height: 160px;

                &.ant-carousel:deep {
                    .slick-slide {
                        height: 160px;
                        line-height: 160px;
                        font-size: 40px;
                        color: #fff;
                        text-align: center;
                        background-color: blueviolet;
                    }
                    
                    .custom-slick-arrow {
                        width: 24px;
                        height: 24px;
                        font-size: 24px;
                        color: #fff;
                        opacity: 0.5;

                        &::before {
                            display: none;
                        }
                    }
                }
            }

            .home-tab {
                margin-top: 20px;

                &.ant-tabs:deep {
                    .ant-tabs-nav {
                        padding-left: 15px;
                        margin: 0;
                    }
                }
            }

            .home-list {
                margin-top: 20px;

                &.ant-list:deep {
                    .home-list-loading {
                        margin-top: 20px;
                        text-align: center;
                    }
                }
            }

            .home-empty {
                padding: 50px 0;
            }
        }

        .home-side {
            margin-left: 20px;
            width: 300px;

            .side-user {
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
                
                &.ant-card:deep {
                    .ant-card-actions {
                        border-top: 0;
                        
                        > li {
                            border-right: 0;
                        }
                    }
                }
            }

            .side-author {
                margin-top: 20px;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
            }

            .side-article {
                margin-top: 20px;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
            }
        }
    }
}
</style>