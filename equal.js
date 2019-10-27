class editHeight {
    constructor(){
    }
    setHeight(angle, full_width, subrect_width){
        let res_height = (full_width - subrect_width)/Math.tan(angle);
        return res_height;
    }
    calculateTop(full_height, height){
        let res_top = full_height - height;
        return res_top;
    }
}