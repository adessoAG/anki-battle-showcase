module.exports = function(RED) {
    function PutMine(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var newMsg = {"payload":{"type":"putMine"}};
            node.send(newMsg);
        });
    }
    RED.nodes.registerType("Mine",PutMine);
}
