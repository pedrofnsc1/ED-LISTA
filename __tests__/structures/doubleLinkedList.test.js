import doubleLinkedList from '../src/doubleLinkedList';

let doubleList;

beforeEach(() => {
  doubleList = new doubleLinkedList();
});

test('instantiation', () => {
  expect(doubleList.length()).toBe(0);
  expect(doubleList.isEmpty()).toBe(true);
  doubleList.add(1);
  expect(doubleList.length()).toBe(1);
  expect(doubleList.isEmpty()).toBe(false);
  doubleList.add(2);
  doubleList.add(3);
  doubleList.add(4);
  doubleList.add(5);
  expect(doubleList.toString()).toBe("5->4->3->2->1");
  doubleList.removeFirst();
  expect(doubleList.toString()).toBe("4->3->2->1");
  doubleList.removeLast();
  expect(doubleList.toString()).toBe("4->3->2");
  doubleList.addAt(0, 5);
  expect(doubleList.toString()).toBe('5->4->3->2');
  expect(doubleList.search(3)).toBe(true);
});