<?php

namespace App\Exceptions;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Response;
use Throwable;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Contracts\Foundation\Application;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param $request
     * @param Throwable $e
     * @return Response|JsonResponse|Application|\Symfony\Component\HttpFoundation\Response|ResponseFactory
     * @throws Throwable
     */
    public function render($request, Throwable $e): Response|JsonResponse|Application|\Symfony\Component\HttpFoundation\Response|ResponseFactory
    {
        if ($request->wantsJson() || $request->ajax()) {
            return response($e->getMessage(), 400);
        }

        switch (true){
            case $e instanceof ConnectionException:
                return response($e->getMessage(), 500);
            case $e instanceof CoinbaseServiceException:
                return response($e->getMessage(), 503);
        }

        return parent::render($request, $e);
    }

}
