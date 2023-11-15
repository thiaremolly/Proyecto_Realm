<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <div class="form-container">
        <h3>Iniciar sesión</h3>
        <form method="post" action="/login">
            <p>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" />
            </p>
            <p>
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" />
            </p>
            <input type="submit" value="Iniciar sesión" />
        </form>
        <p class="error-message">
            <c:out value="${error}" />
        </p>
    </div>

</body>

</html>