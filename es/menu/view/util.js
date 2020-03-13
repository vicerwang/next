export var getWidth = function getWidth(elem) {
    var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
    if (width) {
        width = +width.toFixed(6);
    }
    return width || 0;
};

export var normalizeToArray = function normalizeToArray(items) {
    if (items) {
        if (Array.isArray(items)) {
            return items;
        }
        return [items];
    }

    return [];
};

export var isSibling = function isSibling(currentPos, targetPos) {
    var currentNums = currentPos.split('-').slice(0, -1);
    var targetNums = targetPos.split('-').slice(0, -1);

    return currentNums.length === targetNums.length && currentNums.every(function (num, index) {
        return num === targetNums[index];
    });
};

export var isAncestor = function isAncestor(currentPos, targetPos) {
    var currentNums = currentPos.split('-');
    var targetNums = targetPos.split('-');

    return currentNums.length > targetNums.length && targetNums.every(function (num, index) {
        return num === currentNums[index];
    });
};

export var isAvailablePos = function isAvailablePos(refPos, targetPos, _p2n) {
    var _p2n$targetPos = _p2n[targetPos],
        type = _p2n$targetPos.type,
        disabled = _p2n$targetPos.disabled;


    return isSibling(refPos, targetPos) && (type === 'item' && !disabled || type === 'submenu');
};

export var getFirstAvaliablelChildKey = function getFirstAvaliablelChildKey(parentPos, _p2n) {
    var pos = Object.keys(_p2n).find(function (p) {
        return isAvailablePos(parentPos + '-0', p, _p2n);
    });
    return pos ? _p2n[pos].key : null;
};