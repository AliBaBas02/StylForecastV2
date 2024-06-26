import {defineStore} from "pinia";
import {ref} from "vue";

export const useChartStore = defineStore('chart',()=> {
    const tempChart = ref({
        options: {
            chart: {
                id: 'tempChart',
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            grid: {
                show: false,
            },
            dataLabels:{
                enabled: true
            },
            colors: ["#d97706"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 1,
                    opacityTo: 0.6,
                }
            },
            yaxis:{
                show: false
            },
            xaxis: {
                labels: {
                    style: {
                        colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
                    }
                }
            },
            tooltip: {
                theme: "dark"
            }
        },
    });
    const uvChart = ref({
        options: {
            chart: {
                id: 'uvChart',
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            curve: "smooth",
            grid: {
                show: false,
            },
            dataLabels:{
                enabled: true,
            },
            colors: ["#14532d"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 1,
                    opacityTo: 1,
                }
            },
            yaxis: {
                show: false
            },
            xaxis: {
                labels: {
                    style: {
                        colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
                    }
                }
            },
            tooltip: {
                theme: "dark"
            }
        },
    });
    const rainChart = ref({
        options: {
            chart: {
                id: 'percipProbChart',
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            curve: "smooth",
            grid: {
                show: false,
            },
            dataLabels:{
                enabled: true
            },
            colors: ["#3730a3"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 1,
                    opacityTo: 0.6,
                }
            },
            yaxis: {
                show: false
            },
            xaxis: {
                labels: {
                    style: {
                        colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
                    }
                }
            },
            tooltip: {
                theme: "dark"
            }
        },
    });

    return {uvChart,tempChart,rainChart}
})