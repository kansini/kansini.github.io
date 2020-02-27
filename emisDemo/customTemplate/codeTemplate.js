let code =
	`<template>
		<div id="home">
			<div class="row">
				<summary-card :summaryData="summaryData" :swiperOption="swiperOption" />
			</div>
			<div class="row">
				<div class="col-10">
					<div class="chart-card">
						<div class="chart-card-header">
							<div class="title">数据一览</div>
							<div class="operation">
								<el-radio-group v-model="radio1" size="mini">
									<el-radio-button label="今日"></el-radio-button>
									<el-radio-button label="本周"></el-radio-button>
									<el-radio-button label="本月"></el-radio-button>
									<el-radio-button label="全年"></el-radio-button>
								</el-radio-group>
							</div>
						</div>
						<div class="chart-cart-content">
							
						</div>
					</div>
				</div>
				<div class="col-14">
					<div class="chart-card">
						<div class="chart-card-header">
							<div class="title">数据一览</div>
							<div class="operation">
								<el-radio-group v-model="radio2" size="mini">
									<el-radio-button label="今日"></el-radio-button>
									<el-radio-button label="本周"></el-radio-button>
									<el-radio-button label="本月"></el-radio-button>
									<el-radio-button label="全年"></el-radio-button>
								</el-radio-group>
							</div>
						</div>
						<div class="chart-cart-content" ref="chartContainer01">
							<ve-histogram :data="chartData" :extend="chartExtend" :grid="grid" :width="histogramWidth" height="240px" ref="veChart"></ve-histogram>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<listCard :listData="toDoList"></listCard>
				</div>
				<div class="col-12">
					<listCard :listData="noticeList"></listCard>
				</div>
			</div>
		</div>
</template>
<script>
  export default {
		data() {
			return {
				histogramWidth:"764px",
				chartExtend: {
					legend: {
						show: false,
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow',
						}
					},
					series: {
						barWidth: 16,
						itemStyle: {
							normal: {
								barBorderRadius: [28, 28, 0, 0],
								color: new this.echarts.graphic.LinearGradient(1, 1, 0, 0, [{
									offset: 1,
									color: 'rgba(28, 123, 255,1)'
								}, {
									offset: 0,
									color: 'rgba(28, 123, 255,.6)'
								}])
							}
						}
					},
					xAxis: {
						axisLabel: {
							textStyle: {
								color: '#333',
								fontWeight: 400
							}
						}
					},
					yAxis: {
						axisLabel: {
							textStyle: {
								color: '#333',
								fontSize: 14,
								fontWeight: 400
							}
						}
					},
				},
				grid: {
					show: false,
					top: 8,
					left: 0,
					bottom: 16,
				},
				chartData: {
					"columns": ["部门", "任务数量"],
					"rows": [{
							"部门": "宣传部",
							"任务数量": 1393
					
						},
						{
							"部门": "发改委",
							"任务数量": 3530
					
						},
						{
							"部门": "政法委",
							"任务数量": 2923
					
						},
						{
							"部门": "财政局",
							"任务数量": 1723
					
						},
						{
							"部门": "环保局",
							"任务数量": 3792
					
						},
						{
							"部门": "财政局",
							"任务数量": 4593
					
						},
						{
							"部门": "发改委",
							"任务数量": 1393
					
						},
						{
							"部门": "司法局",
							"任务数量": 3530
					
						},
						{
							"部门": "教育局",
							"任务数量": 2923
					
						},
						{
							"部门": "商务局",
							"任务数量": 1723
					
						}
					]
				},
				radio1: "今日",
				radio2: "今日",
				toDoList: {},
				noticeList: {},
				summaryData:{},
				swiperOption: {
					"speed": 1000,
					"autoplay": {
						"delay": 3e4,
						"disableOnInteraction": false,
						"waitForTransition": true
					},
					"loop": true,
					"grabCursor": true,
					"effect": "coverflow",
					"coverflowEffect": {
						"rotate": 30,
						"stretch": 10,
						"depth": 60,
						"modifier": 2,
						"slideShadows": false
					},
					"parallax": true,
					"pagination": {
						"el": ".swiper-pagination",
						"clickable": true
					},
					"observer": true,
					"observeParents": true
				}
			}
		},
		created(){
			
		},
		mounted() {
			this.getToDoListData()
			this.getNoticeListData()
			this.getSummaryData()
		},
		methods: {
			getToDoListData() {
				this.$axios.get('listData.json')
					.then(res => this.toDoList = res.data.toDoList)
			},
			getNoticeListData() {
				this.$axios.get('listData.json')
					.then(res => this.noticeList = res.data.noticeList)
			},
			getSummaryData() {
				this.$axios.get('summaryData.json')
					.then(res => this.summaryData = res.data)
			}
		}
  }
</script>
<style scoped>
	#home{
			width: 100%;
			padding: 16px 24px;
			box-sizing: border-box;
			margin: 0 auto;
	}
	.chart-card {
				width: 100%;
				height: 300px;
				background: #FFFFFF;
				border-radius: 4px;
				box-shadow: $cardShadow;
				padding: 16px;
				box-sizing: border-box;
				margin-bottom: 16px;
	}
	.chart-card-header {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				color: #333;
				font-weight: 600;
				margin-bottom: 16px;
	}
	
</style>	
`
export default code
