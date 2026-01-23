<script setup lang="ts">
import {getColorConfig} from './service/color';
import md5 from 'js-md5';
import {onMounted, ref} from 'vue';
import {useRouter} from 'vitepress';

const colorConfig = ref({});
const router = useRouter();
const statData = ref<CourseGradeStatData>();

interface CourseGradeStatData {
  courseInfo: {
    name: string;
    instructor: string;
  };
  scoreInfo: {
    total: number;
    average: number;
    data: {
      from: number;
      to: number;
      total: number;
    }[];
  };
  dataTime: string;
}

const parseQuery = (query: string): CourseGradeStatData | undefined => {
  const {name, instructor, sign, data, dataTime, v} = Object.fromEntries(
    new URLSearchParams(query),
  );
  if (v !== '2') {
    return;
  }
  const targetSign = md5(
    `v2${name}${instructor}${data}${dataTime}uTYbpYG7YSVzncQZ`,
  );
  if (targetSign !== sign) {
    return;
  }
  return {
    courseInfo: {
      instructor: decodeURI(instructor),
      name: decodeURI(name),
    },
    dataTime: dataTime,
    scoreInfo: JSON.parse(data),
  };
};

onMounted(async () => {
  const applyQueryData = () => {
    let search = window.location.search;
    if (search[0] === '?' && search[1] === '?') {
      search = search.slice(1);
    }
    const data = parseQuery(search);
    if (!data) {
      router.go('/');
    } else {
      statData.value = data;
    }
  };

  const removeTop = () => {
    document.querySelector('.container').remove();
  };

  colorConfig.value = await getColorConfig();
  applyQueryData();
  removeTop();
});
</script>

<template>
  <div v-if="statData">
    <h2 class="course-name">给分数据 - {{ statData.courseInfo.name }}</h2>
    <p class="instructor">{{ statData.courseInfo.instructor }}</p>
    <div class="container">
      <div
        class="course-score-item-container"
        v-for="info in statData.scoreInfo.data"
        v-bind:key="info.from">
        <div class="course-score-item-tip">{{ info.from }}-{{ info.to }}</div>
        <div
          :style="{
            width: (info.total / statData.scoreInfo.total) * 80 + '%',
            background: colorConfig[`${info.from}-${info.to}`] ?? '',
          }"
          class="course-score-item-division"
          v-if="info.total > 0" />
        <span
          :style="{
            color: colorConfig[`${info.from}-${info.to}`] ?? '',
          }"
          >{{ info.total }}</span
        >
      </div>
    </div>
    <div class="tip">
      该给分数据由用户于{{ statData.dataTime }}生成，不保证数据实时性。
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-score-item {
  &-tip {
    width: 52px;
    font-size: 14px;
  }

  &-division {
    height: 6px;
    border-radius: 3px;
    margin-right: 8px;
  }

  &-container {
    display: flex;
    align-items: center;
  }
}

.tip {
  margin-top: 56px;
}

.instructor {
  margin-top: 0;
}

.course-name {
  margin-bottom: 0;
}
</style>
