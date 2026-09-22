const MOVE_AMOUNT = 120;

function getWindows() {
    var normals = workspace.windowList().filter(function(window) {
        return window.normalWindow;
    });
    return normals;
}

function moveWindows(windows, x, y) {
    for (window of windows) {
        window.frameGeometry.x += x;
        window.frameGeometry.y += y;
    }
}

function moveWindowsUp() {
    moveWindows(getWindows(), 0, -MOVE_AMOUNT);
}
function moveWindowsDown() {
    moveWindows(getWindows(), 0, MOVE_AMOUNT);
}
function moveWindowsLeft() {
    moveWindows(getWindows(), -MOVE_AMOUNT, 0);
}
function moveWindowsRight() {
    moveWindows(getWindows(), MOVE_AMOUNT, 0);
}

registerScreenEdge(4, moveWindowsUp);
registerScreenEdge(0, moveWindowsDown);
registerScreenEdge(2, moveWindowsLeft);
registerScreenEdge(6, moveWindowsRight);
