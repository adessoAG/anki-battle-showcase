module.exports = function(RED) {
    function brake(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
			var newMsg = {"payload":{"type":"brake", "velocity":config.velocity}};
			node.send(newMsg);
        });
    }
    RED.nodes.registerType("Brake",brake);
}
