const API = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const GET_ALL_COCKTAILS = API + 'filter.php?c=Cocktail'
export const SEARCH_COCKTAIL_BY_NAME = API + 'search.php?s='
export const FILTER_COCKTAIL_BY_ALCO = API + 'filter.php?a='
export const GET_INFO_COCKTAIL_BY_ID = API + 'lookup.php?i='
export const GET_INGREDIENT_BY_NAME = API + 'search.php?i='