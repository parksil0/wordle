export type BoxState = 'exact' | 'close' | 'none' | undefined;

export type BoardState = Array<[BoxState, BoxState, BoxState, BoxState, BoxState]>;

export type AlphabetBoxAnimation = 'flip' | 'pop' | undefined;

export type EmptyRow = ['', '', '', '', ''];
