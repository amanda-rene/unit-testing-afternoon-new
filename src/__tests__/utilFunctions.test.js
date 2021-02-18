import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('shortenText should not alter strings with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should shorten text over 100 characters and add 3 periods to the end', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('wordCount will check posts from array and return a total word count', () => {
    expect(wordCount(posts)).toBe(233)
});

test('attachUsername should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName')
})

