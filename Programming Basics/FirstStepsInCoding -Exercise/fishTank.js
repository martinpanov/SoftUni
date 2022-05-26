function fishTank(input){
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3]) / 100;
    const oneLiterWater = 0.001; 
    const aquariumSize = length * width * height;
    const sizeInLiters = aquariumSize * oneLiterWater;
    const litersRequired = sizeInLiters * (1 - percent);
    console.log(litersRequired)
}
fishTank(["85 ", "75 ", "47 ", "17 "])