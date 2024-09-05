export type MassageChairType = {
    id: number,
    name: string,
    subTitle: string,
    price: number,
    availability: boolean,
    colorVariants: {colorCode: string, colorName: string}[]
    listItemDesc: string[],
    gallery: {
        product: string,
        headOn: string,
        side: string,
        zeroGravity: string,
        detailsHero: string
    },
    headOnIcons: string[],
    headOnSubTitle: string,
    headOnTitle: string,
    headOnDesc: string,
    headOnTitle2: string,
    headOnDesc2: string,
    headOnSubtitleBottom: string,
    sideSubTitle: string,
    sideTitle: string,
    sideDesc: string,
    sideIcons: string[],
    zeroGravSubTitle: string,
    zeroGravtitle: string,
    zeroGravDesc: string,
    specs: {
        info: {
            title: string,
            info1: string,
            info2: string,
            info3: string,
            info4: string
        },
        functions: {
            title: string,
            funcs: string[]
        },
        techSpecs: {
            title: string,
            funcs: string[]
        }
    } 
}