const unitList = ['шт.', 'упак'];

export const workTypeOptions = [
    { label: 'Канализация', value: 'канализация' },
    { label: 'Забор', value: 'забор' },
];

export const floorOptions = [
    { label: '1 этаж 90м²', value: 'floor1_90' },
    { label: '1 этаж 100м²', value: 'floor1_100' },
    { label: '2 этажа 130м²', value: 'floor2_130' },
    { label: '2 этажа 170м²', value: 'floor2_170' },
];

export const fenceTemplates = {
    default: [
    { name: 'Труба круглая, d=73 мм (2,5 м)', quantity: 0, unit: 'шт.', article: 0 },
    { name: 'Труба круглая, d=73 мм (3,0 м)', quantity: 0, unit: 'шт.', article: 0 },
    { name: 'Труба квадратная, 6×6 см (3,0 м)', quantity: 0, unit: 'шт.', article: 0 },
    { name: 'Труба квадратная, 10×10 см (3,0 м)', quantity: 0, unit: 'шт.', article: 0 },
    { name: 'Прожилины', quantity: 0, unit: 'шт.', article: 0 },
    { name: 'Профнастил С-8 1200x1800 (шоколад)', quantity: 0, unit: 'шт.', article: 0, color: 'choc'  },
    { name: 'Профнастил С-8 1200x2000 (шоколад)', quantity: 0, unit: 'шт.', article: 0, color: 'choc'  },
    { name: 'Профнастил С-8 1200x1800 (графит)', quantity: 0, unit: 'шт.', article: 0, color: 'graf'  },
    { name: 'Профнастил С-8 1200x2000 (графит)', quantity: 0, unit: 'шт.', article: 0, color: 'graf'  },
    { name: 'Профнастил С-8 1200x1800 (оцинкованный)', quantity: 0, unit: 'шт.', article: 0, color: 'zinc'  },
    { name: 'Профнастил С-8 1200x2000 (оцинкованный)', quantity: 0, unit: 'шт.', article: 0, color: 'zinc' }
]};

export const floorTemplates = {
    floor1_90: [
        { name: 'Рубероид РПП 300 ТУ, 15 м2 (Дегтярск)', quantity: 9, unit: 'шт.', article: 218146 },
        { name: 'Труба канализационная 50х1,8х500', quantity: 5, unit: 'шт.', article: 566655 },
        { name: 'Теплоизоляция Энергофлекс Супер 54/13 (1 шт = 2 м)', quantity: 1, unit: 'шт.', article: 41612 },
        { name: 'Заглушка канализационная 50', quantity: 7, unit: 'шт.', article: 43375 },
        { name: 'Труба канализационная наружная 110x3,2x500 мм', quantity: 6, unit: 'шт.', article: 150063 },
        { name: 'Труба канализационная наружная 110x3,2x1000 мм', quantity: 5, unit: 'шт.', article: 43553 },
        { name: 'Труба канализационная наружная 110x3,2х2000 мм', quantity: 4, unit: 'шт.', article: 43554 },
        { name: 'Муфта наружная канализационная 110', quantity: 1, unit: 'шт.', article: 41369 },
        { name: 'Заглушка канализационная 110 мм', quantity: 2, unit: 'шт.', article: 43376 },
        { name: 'Теплоизоляция Энергофлекс Супер 114/13 (1 ШТ = 2 M)', quantity: 4, unit: 'шт.', article: 42429 },
        { name: 'Переход (редукция) канализационный длинный 110х50', quantity: 4, unit: 'шт.', article: 43393 },
        { name: 'Тройник наружный канализационный 110x110 45°', quantity: 6, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 15°', quantity: 1, unit: 'шт.', article: 77125 },
        { name: 'Отвод наружный канализационный 110 30°', quantity: 1, unit: 'шт.', article: 68482 },
        { name: 'Отвод наружный канализационный 110 45°', quantity: 6, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 87°', quantity: 3, unit: 'шт.', article: 40982 },
        { name: 'Отвод крутоизогнутый Д108х3,5', quantity: 2, unit: 'шт.', article: 41132 },
        { name: 'Круг по металлу отрезной 125х2,5х22 Луга', quantity: 2, unit: 'шт.', article: 1683 },
        { name: 'Круг по металлу отрезной 230х2,5х22 Луга', quantity: 1, unit: 'шт.', article: 1687 },
        { name: 'Лента клейкая армированная серебристая 48х25', quantity: 3, unit: 'шт.', article: 39891 },
    ],

    floor1_100: [
        { name: 'Рубероид РПП 300 ТУ, 15 м2 (Дегтярск)', quantity: 12, unit: 'шт.', article: 218146 },
        { name: 'Труба канализационная 50х1,8х500', quantity: 10, unit: 'шт.', article: 566655 },
        { name: 'Теплоизоляция Энергофлекс Супер 54/13 (1 шт = 2 м)', quantity: 2, unit: 'шт.', article: 41612 },
        { name: 'Отвод канализационный 50x87,5°', quantity: 4, unit: 'шт.', article: 43387 },
        { name: 'Заглушка канализационная 50', quantity: 14, unit: 'шт.', article: 43375 },
        { name: 'Труба канализационная наружная 110x3,2x500 мм', quantity: 12, unit: 'шт.', article: 150063 },
        { name: 'Труба канализационная наружная 110x3,2x1000 мм', quantity: 4, unit: 'шт.', article: 43553 },
        { name: 'Труба канализационная наружная 110x3,2х2000 мм', quantity: 8, unit: 'шт.', article: 43554 },
        { name: 'Муфта наружная канализационная 110', quantity: 2, unit: 'шт.', article: 41369 },
        { name: 'Заглушка канализационная 110 мм', quantity: 4, unit: 'шт.', article: 43376 },
        { name: 'Теплоизоляция Энергофлекс Супер 114/13 (1 ШТ = 2 M)', quantity: 8, unit: 'шт.', article: 42429 },
        { name: 'Переход (редукция) канализационный длинный 110х50', quantity: 4, unit: 'шт.', article: 43393 },
        { name: 'Тройник наружный канализационный 110x110 45°', quantity: 12, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 15°', quantity: 2, unit: 'шт.', article: 77125 },
        { name: 'Отвод наружный канализационный 110 30°', quantity: 2, unit: 'шт.', article: 68482 },
        { name: 'Отвод наружный канализационный 110 45°', quantity: 12, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 87°', quantity: 6, unit: 'шт.', article: 40982 },
        { name: 'Отвод крутоизогнутый Д108х3,5', quantity: 1, unit: 'шт.', article: 41132 },
        { name: 'Круг по металлу отрезной 125х2,5х22 Луга', quantity: 4, unit: 'шт.', article: 1683 },
        { name: 'Круг по металлу отрезной 230х2,5х22 Луга', quantity: 2, unit: 'шт.', article: 1687 },
        { name: 'Лента клейкая армированная серебристая 48х25', quantity: 2, unit: 'шт.', article: 39891 },
        { name: 'Проволка вязальная 1,2x400 (5кг)', quantity: 4, unit: 'шт.', article: 21332 },
    ],

    floor2_130: [
        { name: 'Рубероид РПП 300 ТУ, 15 м2 (Дегтярск)', quantity: 10, unit: 'шт.', article: 218146 },
        { name: 'Труба канализационная 50х1,8х500', quantity: 4, unit: 'шт.', article: 566655 },
        { name: 'Теплоизоляция Энергофлекс Супер 54/13 (1 шт = 2 м)', quantity: 1, unit: 'шт.', article: 41612 },
        { name: 'Заглушка канализационная 50', quantity: 4, unit: 'шт.', article: 43375 },
        { name: 'Труба канализационная наружная 110x3,2x500 мм', quantity: 7, unit: 'шт.', article: 150063 },
        { name: 'Труба канализационная наружная 110x3,2x1000 мм', quantity: 3, unit: 'шт.', article: 43553 },
        { name: 'Труба канализационная наружная 110x3,2х2000 мм', quantity: 4, unit: 'шт.', article: 43554 },
        { name: 'Муфта наружная канализационная 110', quantity: 1, unit: 'шт.', article: 41369 },
        { name: 'Заглушка канализационная 110 мм', quantity: 3, unit: 'шт.', article: 43376 },
        { name: 'Теплоизоляция Энергофлекс Супер 114/13 (1 ШТ = 2 M)', quantity: 7, unit: 'шт.', article: 42429 },
        { name: 'Переход (редукция) канализационный длинный 110х50', quantity: 4, unit: 'шт.', article: 43393 },
        { name: 'Тройник наружный канализационный 110x110 45°', quantity: 7, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 15°', quantity: 1, unit: 'шт.', article: 77125 },
        { name: 'Отвод наружный канализационный 110 30°', quantity: 1, unit: 'шт.', article: 68482 },
        { name: 'Отвод наружный канализационный 110 45°', quantity: 6, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 87°', quantity: 3, unit: 'шт.', article: 40982 },
        { name: 'Отвод крутоизогнутый Д108х3,5', quantity: 2, unit: 'шт.', article: 41132 },
        { name: 'Круг по металлу отрезной 125х2,5х22 Луга', quantity: 2, unit: 'шт.', article: 1683 },
        { name: 'Круг по металлу отрезной 230х2,5х22 Луга', quantity: 1, unit: 'шт.', article: 1687 },
        { name: 'Лента клейкая армированная серебристая 48х25', quantity: 3, unit: 'шт.', article: 39891 },
    ],

    floor2_170: [
        { name: 'Рубероид РПП 300 ТУ, 15 м2 (Дегтярск)', quantity: 14, unit: 'шт.', article: 218146 },
        { name: 'Труба канализационная 50х1,8х500', quantity: 5, unit: 'шт.', article: 566655 },
        { name: 'Теплоизоляция Энергофлекс Супер 54/13 (1 шт = 2 м)', quantity: 1, unit: 'шт.', article: 41612 },
        { name: 'Отвод канализационный 50x87,5°', quantity: 2, unit: 'шт.', article: 43387 },
        { name: 'Заглушка канализационная 50', quantity: 7, unit: 'шт.', article: 43375 },
        { name: 'Труба канализационная наружная 110x3,2x500 мм', quantity: 6, unit: 'шт.', article: 150063 },
        { name: 'Труба канализационная наружная 110x3,2x1000 мм', quantity: 5, unit: 'шт.', article: 43553 },
        { name: 'Труба канализационная наружная 110x3,2х2000 мм', quantity: 6, unit: 'шт.', article: 43554 },
        { name: 'Муфта наружная канализационная 110', quantity: 1, unit: 'шт.', article: 41369 },
        { name: 'Заглушка канализационная 110 мм', quantity: 2, unit: 'шт.', article: 43376 },
        { name: 'Теплоизоляция Энергофлекс Супер 114/13 (1 ШТ = 2 M)', quantity: 10, unit: 'шт.', article: 42429 },
        { name: 'Переход (редукция) канализационный длинный 110х50', quantity: 4, unit: 'шт.', article: 43393 },
        { name: 'Тройник наружный канализационный 110x110 45°', quantity: 8, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 15°', quantity: 1, unit: 'шт.', article: 77125 },
        { name: 'Отвод наружный канализационный 110 30°', quantity: 1, unit: 'шт.', article: 68482 },
        { name: 'Отвод наружный канализационный 110 45°', quantity: 8, unit: 'шт.', article: 41945 },
        { name: 'Отвод наружный канализационный 110 87°', quantity: 3, unit: 'шт.', article: 40982 },
        { name: 'Отвод крутоизогнутый Д108х3,5', quantity: 2, unit: 'шт.', article: 41132 },
        { name: 'Круг по металлу отрезной 125х2,5х22 Луга', quantity: 2, unit: 'шт.', article: 1683 },
        { name: 'Круг по металлу отрезной 230х2,5х22 Луга', quantity: 1, unit: 'шт.', article: 1687 },
        { name: 'Лента клейкая армированная серебристая 48х25', quantity: 3, unit: 'шт.', article: 39891 },
    ],
};

export const statusOptions = [
    { label: 'Создана', value: 'created' },
    { label: 'В обработке', value: 'processing' },
    { label: 'Завершена', value: 'completed' },
];

const mapOptions = (input: any): any => {
    if (Array.isArray(input)) {
        return input.map((item: any) => {
            // Если уже есть label и value - возвращаем как есть
            if (item.label && item.value !== undefined) {
                return { ...item };
            }
            // Если есть name но нет label - используем name как label и value
            if (item.name && !item.label) {
                return { label: item.name, value: item.name, ...item };
            }
            // Если строка - создаем label и value из строки
            if (typeof item === 'string') {
                return { label: item, value: item };
            }
            return item;
        });
    }

    if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
        const result: any = {};

        Object.entries(input).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                result[key] = mapOptions(value);
            }
            else if (typeof value === 'object' && value !== null) {
                result[key] = mapOptions(value);
            }
        });

        return result;
    }

    return input;
};

export const optionFlat = mapOptions(unitList);
export const optionFloorTemplates = mapOptions(floorTemplates);
export const optionFenceTemplates = mapOptions(fenceTemplates);