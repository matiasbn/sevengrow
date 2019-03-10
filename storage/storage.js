const { clientExists } = require('./helpers/clientExists');
const { saveSensor } = require('./helpers/saveSensors');
const { saveControl } = require('./helpers/saveControls');

/**
 * @function processToStorage receives from the reception module to decide the storage
 * @param {String} _topic 
 * @param {String} _payload 
 */

module.exports.processToStorage = (_topic, _payload) => {
    const topicArray = _topic.split('/');
    const clientID = topicArray[1];
    const actionType = topicArray[2];
    const dataType = topicArray[3];
    if (!clientExists(clientID)) {
        console.log('storage/storage.js.processStorage: client dont exists')
    }
    else {
        switch (actionType) {
            case 'sensor':
                saveSensor(clientID, dataType, _payload);
                console.log('sensor type')
                break;
            case 'control':
                saveControl(clientID, dataType, _payload);
                console.log('control type')
                break;
            default:
                console.log('action not allowed')
        }
    }
}
