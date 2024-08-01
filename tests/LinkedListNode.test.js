import { beforeEach, describe, expect, test, jest } from "@jest/globals";
import LinkedList from "../src/LinkedListNode.js";

describe("Test LinkedList class of array", () => {

    let linked;

    beforeEach(() => {
        linked = new LinkedList();
    });

    test("Test addAtEnd method", () => {
        linked.addAtEnd(15);
        expect(linked.count).toBe(1);
        expect(linked.head.element).toBe(15);
    });

    test("Test removeFromStart method", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        linked.removeFromStart();
        expect(linked.count).toBe(1);
        expect(linked.head.element).toBe(2);
    });

    test("Test remove method when element is not found", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        const result = linked.remove(3);
        expect(result).toBe(false);
        expect(linked.count).toBe(2);
    });

    test("Test remove method when element is found", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        const result = linked.remove(1);
        expect(result).toBe(true);
        expect(linked.count).toBe(1);
        expect(linked.head.element).toBe(2);
    });

    test("Test getElementAt with invalid index", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        expect(linked.getElementAt(10)).toBeUndefined();
    });

    test("Test getElementAt with valid index", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        expect(linked.getElementAt(1).element).toBe(2);
    });

    test("Test insert at the beginning of the list", () => {
        linked.addAtEnd(2);
        linked.addAtEnd(3);
        linked.insert(1, 0);
        expect(linked.head.element).toBe(1);
        expect(linked.count).toBe(3);
    });

    test("Test insert in the middle of the list", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(3);
        linked.insert(2, 1);
        expect(linked.getElementAt(1).element).toBe(2);
        expect(linked.count).toBe(3);
    });

    test("Test insert at the end of the list", () => {
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        linked.insert(3, 2);
        expect(linked.getElementAt(2).element).toBe(3);
        expect(linked.count).toBe(3);
    });

    test("Test insert method with invalid index", () => {
        const result = linked.insert(1, 5);
        expect(result).toBe(false);
    });

    test("Test remove from an empty list", () => {
        const result = linked.remove(3);
        expect(result).toBe(false);
    });

    test("Test print method with empty list", () => {
        console.log = jest.fn();
        linked.print();
        expect(console.log).toHaveBeenCalledWith('The list is empty.');
    });

    test("Test print method with elements in list", () => {
        console.log = jest.fn();
        linked.addAtEnd(1);
        linked.addAtEnd(2);
        linked.print();
        expect(console.log).toHaveBeenCalledWith('List elements: 1 - 2');
    });

    test("Test getElementAt with head element", () => {
        linked.addAtEnd(1);
        expect(linked.getElementAt(0).element).toBe(1);
    });

});

