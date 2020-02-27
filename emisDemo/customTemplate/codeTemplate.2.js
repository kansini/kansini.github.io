let code = `<template>
	<div class="tag">
		<div class="state-tag" :class="state">
			{{title}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'stateTag',
		props: {
			state: {
				type: String,
				default: 'warning'
			},
			title: {
				type: String,
				default: "超期"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		position: relative;



		.state-tag {
			position: relative;
			padding-left: 24px;
			box-sizing: border-box;
			text-align: left;
			//color: $blue-5;
			color: $gray-7;
			transition: all ease .6s;
			cursor: pointer;



			&::before {
				position: absolute;
				content: '';
				left: 8px;
				top: 8px;
				width: 8px;
				height: 8px;
				border-radius: 100%;
				background: $gray-4;
				//animation: inprogress 2s infinite;
			}
		}

		.exceeded {
			color: $red-5;

			&::before {
				content: '';
				background: $red-5;
				animation: exceeded 2s infinite;
			}
		}

		.warning {
			color: $orange-5;

			&::before {
				content: '';
				background: $orange-5;
				animation: warning 2s infinite;
			}
		}

		.normal {
			color: $green-5;

			&::before {
				content: '';
				background: $green-5;
				animation: normal 2s infinite;
			}
		}


		&:hover .state-tag {
			transform: scale(1.06);
		}

		&:hover .operation {
			display: block;
			right: 12px;
			opacity: 1;
		}
	}
</style>

`
export default code
