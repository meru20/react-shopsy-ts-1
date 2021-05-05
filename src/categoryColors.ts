enum TypeColor {
electronics= '#F5C10D',
jewelery= '#487BFF',
men= '#DD3545',
women= '#3FA2B8',
}
export const setTypeColor = (type: string): string => {
    switch (type) {
        case 'electronics':
            return TypeColor.electronics;
        case 'jewelery':
            return TypeColor.jewelery; 
        case "men's clothing":
            return TypeColor.men; 
        case "women's clothing":
            return TypeColor.women;   
        default:
            return '#333';  
    }     
}