export default function () {
  return {
    date: Date.now(),
    dateInterval: null,
    size: {
      w: 0,
      h: 0
    },
    socketConnected: false,
    activeSnapshot: null,
    appPrevState: null,
    backendData: {},
    snapshots: {},
    snapshotsListOptions: {
      buttonPin: false,
      x: 0,
      y: 0,
      width: 350
    }
  }
}

// $scope.frontierHash = '0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa';
// $scope.coinbases = [];
