var quoteController = {
    list: function(request, reply) {
        reply(quotes);
    },
    show: function(request, reply) {
        var id = request.params.id;
        var quote = getQuoteById(id, reply);

        if (quote.id) {
            reply(quote);
        }
    },
    create: function(request, reply) {
        var payload = request.payload;
        var id = quotes.length + 1;
    
        quotes.push({
            id: id,
            author: payload.author,
            text: payload.text
        });

        reply({ message: 'Quote successfully added.' }).code(201);
    },
    update: function(request, reply) {
        var data = request.payload;
        var id = request.params.id;
        var quote = getQuoteById(id, reply);

        if (quote.id) {
            quote.author = data.author;
            quote.text = data.text;
            
            quotes[quote.id - 1] = quote;
            
            reply({ message: 'Quote successfully updated.' }).code(200);
        }
    },
    destroy: function(request, reply) {
        var id = request.params.id;
        var quote = getQuoteById(id, reply);

        if (quote.id) {
            delete quotes[quote.id - 1];
            reply({ message: 'Quote successfully deleted.' }).code(200);
        }
    }
};

function getQuoteById(id, reply) {
    if (id > quotes.length || quotes[id - 1] == null) {
        return reply('No quote found.').code(404);
    }
    
    return quotes[id - 1];
}

var quotes = [
    {
        id: 1,
        author: 'Audrey Hepburn',
        text: 'Nothing is impossible, the word itself says Iam possible!'
    },
    {
        id: 2,
        author: 'Walt Disney',
        text: 'You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you'
    }
];

module.exports = quoteController;

