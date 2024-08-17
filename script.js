let nums = [];

function getData() {
    const input = document.getElementById("data-input").value;
    nums = input.split(',').map(Number);
    document.getElementById("result-area").style.display = 'none';
}

function deleteData() {
    nums = [];
    document.getElementById("result-area").style.display = 'none';
}

function calculateMean() {
    if (nums.length) {
        const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
        displayResult("Mean: " + mean.toFixed(2));
    }
}

function calculateMedian() {
    if (nums.length) {
        nums.sort((a, b) => a - b);
        let median = 0;
        if (nums.length % 2 === 0) {
            median = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
        } else {
            median = nums[Math.floor(nums.length / 2)];
        }
        displayResult("Median: " + median.toFixed(2));
    }
}

function calculateMode() {
    if (nums.length) {
        let modeMap = {};
        let maxCount = 0, mode = null;
        nums.forEach(num => {
            modeMap[num] = (modeMap[num] || 0) + 1;
            if (modeMap[num] > maxCount) {
                maxCount = modeMap[num];
                mode = num;
            }
        });
        displayResult("Mode: " + (maxCount > 1 ? mode : "No mode found"));
    }
}

function calculateStandardDeviation() {
    if (nums.length) {
        const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
        const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / nums.length;
        const stdDev = Math.sqrt(variance);
        displayResult("Standard Deviation: " + stdDev.toFixed(2));
    }
}

function calculateVariance() {
    if (nums.length) {
        const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
        const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / nums.length;
        displayResult("Variance: " + variance.toFixed(2));
    }
}

function calculateFirstOrderMoment() {
    calculateMean();  // First order moment is the mean
}

function calculateRegression() {
    const input2 = document.getElementById("data-input-2").value;
    const nums2 = input2.split(',').map(Number);
    if (nums.length && nums2.length && nums.length === nums2.length) {
        const mean1 = nums.reduce((a, b) => a + b, 0) / nums.length;
        const mean2 = nums2.reduce((a, b) => a + b, 0) / nums2.length;
        const covariance = nums.reduce((sum, x, i) => sum + (x * nums2[i]), 0) / nums.length - mean1 * mean2;
        const variance1 = nums.reduce((sum, x) => sum + Math.pow(x - mean1, 2), 0) / nums.length;
        const b_yx = covariance / variance1;
        const a_yx = mean2 - b_yx * mean1;
        displayResult(`Regression line: y = ${a_yx.toFixed(2)} + ${b_yx.toFixed(2)}x`);
    } else {
        displayResult("Please enter valid and equal size datasets.");
    }
}

function displayResult(text) {
    document.getElementById("result").innerText = text;
    document.getElementById("result-area").style.display = 'block';
}
